export class Review {
	constructor(
		private _name?: string,
		private _rating?: number
	){}

	public get name(): string{
		return this._name;
	}
	public set name(n: string){
		this._name = n;
	}
	
	public get rating(): number{
		return this._rating;
	}

	public set rating(r: number){
		this._rating = r;
	}
}
