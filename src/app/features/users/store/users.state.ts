export interface UsersState {
  users: string[];
  usersLoading: boolean;
  usersLoadingError: string;
}

export function defaultUsersStore(): UsersState {
  return {
    users: [],
    usersLoading: false,
    usersLoadingError: ''
  };
}
