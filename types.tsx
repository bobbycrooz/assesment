export interface LoginUserType {
	email: string;
	password: string;
}

export interface UserTypes {
	username?: string;
	name?: string;
	email?: string;
	password?: any;
}

export interface NotifyTypes {
	type: 'success' | 'error';
	message: string;
}

// export default LoginUserType
