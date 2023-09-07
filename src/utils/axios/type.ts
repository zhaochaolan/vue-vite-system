export interface IReaponse<T = any> {
	code:number | string;
	result:T;
	message:string;
	status:string | number
}
