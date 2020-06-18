/**
 * The core state will contain information you want universally available and accessible from your entire
 * application. It will always be available.
 */
export interface CoreState {
  currentUser: string;
}

export const defaultCoreState = (): CoreState => {
  return {
    currentUser: ''
  };
};
