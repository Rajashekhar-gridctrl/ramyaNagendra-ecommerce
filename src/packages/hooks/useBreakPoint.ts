import { useState, useEffect } from 'react';

// Define a type for breakpoints
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

// Breakpoints for React-Bootstrap (Bootstrap 5 defaults) as a Record type for strong typing
const breakpoints: Record<Breakpoint, string> = {
  xs: '(max-width: 575.98px)',
  sm: '(min-width: 576px) and (max-width: 767.98px)',
  md: '(min-width: 768px) and (max-width: 991.98px)',
  lg: '(min-width: 992px) and (max-width: 1199.98px)',
  xl: '(min-width: 1200px) and (max-width: 1399.98px)',
  xxl: '(min-width: 1400px)',
};

// The custom hook
export const useBreakpoint = (): Breakpoint | null => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint | null>(
    null
  );

  useEffect(() => {
    // Create media query lists for all breakpoints
    const matchMediaQueries: Record<Breakpoint, MediaQueryList> = {} as Record<
      Breakpoint,
      MediaQueryList
    >;
    Object.keys(breakpoints).forEach((key) => {
      const bp = key as Breakpoint;
      matchMediaQueries[bp] = window.matchMedia(breakpoints[bp]);
    });

    // Function to check and set the active breakpoint
    const handleBreakpointChange = () => {
      for (const [key, query] of Object.entries(matchMediaQueries)) {
        if (query.matches) {
          setCurrentBreakpoint(key as Breakpoint);
          break;
        }
      }
    };

    // Add event listeners for each media query
    Object.values(matchMediaQueries).forEach((query) =>
      query.addEventListener('change', handleBreakpointChange)
    );

    // Initial check
    handleBreakpointChange();

    // Cleanup event listeners on component unmount
    return () => {
      Object.values(matchMediaQueries).forEach((query) =>
        query.removeEventListener('change', handleBreakpointChange)
      );
    };
  }, []);

  return currentBreakpoint;
};
