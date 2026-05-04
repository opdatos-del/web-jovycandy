/**
 * ErrorBoundary — React class component that catches uncaught errors in child component tree.
 *
 * Prevents entire app from crashing when a component throws. Instead shows fallback UI
 * with option to reload. In dev, also displays the error stack trace.
 *
 * Usage:
 *   <ErrorBoundary>
 *     <YourComponent />
 *   </ErrorBoundary>
 *
 * Or with custom fallback:
 *   <ErrorBoundary fallback={<CustomErrorUI />}>
 *     <YourComponent />
 *   </ErrorBoundary>
 */
import { Component, type ReactNode } from 'react';

/** Props accepted by ErrorBoundary */
type ErrorBoundaryProps = {
  /** Child components to wrap and protect */
  children: ReactNode;
  /** Optional custom fallback UI to render when an error occurs */
  fallback?: ReactNode;
};

/** Internal state tracking whether an error was caught and the error object itself */
type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

/**
 * ErrorBoundary class component.
 *
 * Lifecycle:
 * 1. getDerivedStateFromError — called during render phase, updates state to trigger fallback
 * 2. componentDidCatch — called after commit phase, used for logging
 * 3. render — if hasError=true renders fallback, otherwise renders children
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  /**
   * Called when a child component throws during render.
   * Converts error into state to trigger fallback UI.
   * Must return new state (not mutate), so returns plain object.
   */
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  /**
   * Called after error is caught and committed to the DOM.
   * Used for side effects like logging. Does not trigger re-render.
   */
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI — shows error message + reload button
      return (
        <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 p-8 text-center">
          <div className="text-6xl">⚠️</div>
          <h2 className="text-2xl font-semibold text-stone-800">Algo salió mal</h2>
          <p className="max-w-md text-stone-600">
            Encontramos un problema inesperado. Intentá recargar la página.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-2 rounded-lg bg-stone-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-800"
          >
            Recargar página
          </button>
          {this.state.error && (
            <pre className="mt-4 max-w-2xl overflow-auto rounded-lg bg-stone-100 p-4 text-left text-xs text-red-600">
              {this.state.error.stack}
            </pre>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
