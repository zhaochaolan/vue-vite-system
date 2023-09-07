export interface MockParams {
	url:string;
	type:string;
	data?:any;
	params?:any;
	reponse(option?:any):Record<string,unknown>
}
