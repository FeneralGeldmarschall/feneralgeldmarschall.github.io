declare namespace wasm_bindgen {
	/* tslint:disable */
	/* eslint-disable */
	/**
	*/
	export class IsingModell {
	  free(): void;
	/**
	* @param {number} size
	* @param {number} b
	* @param {number} t
	* @param {number} i
	* @param {number} up
	* @param {bigint} seed
	* @returns {IsingModell}
	*/
	  static new(size: number, b: number, t: number, i: number, up: number, seed: bigint): IsingModell;
	/**
	* @param {number} mc_steps
	* @returns {number}
	*/
	  run(mc_steps: number): number;
	/**
	* @returns {number}
	*/
	  grid_ptr(): number;
	/**
	* @returns {number}
	*/
	  changed_ptr(): number;
	/**
	* @returns {number}
	*/
	  get_M(): number;
	/**
	* @returns {number}
	*/
	  get_M_avg(): number;
	/**
	* @returns {number}
	*/
	  get_U(): number;
	/**
	* @returns {number}
	*/
	  get_U_avg(): number;
	/**
	* @returns {number}
	*/
	  get_T(): number;
	/**
	* @returns {number}
	*/
	  get_B(): number;
	/**
	* @returns {number}
	*/
	  get_S(): number;
	/**
	* @returns {bigint}
	*/
	  get_steps(): bigint;
	/**
	* @param {number} x
	* @param {number} y
	* @returns {number}
	*/
	  get_Spin_at(x: number, y: number): number;
	/**
	* @param {number} newT
	*/
	  set_T(newT: number): void;
	/**
	* @param {number} newB
	*/
	  set_B(newB: number): void;
	/**
	*/
	  reset_data(): void;
	/**
	*/
	  reset_avgs(): void;
	/**
	*/
	  magnetize(): void;
	}
	
}

declare type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

declare interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_isingmodell_free: (a: number) => void;
  readonly isingmodell_new: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly isingmodell_run: (a: number, b: number) => number;
  readonly isingmodell_grid_ptr: (a: number) => number;
  readonly isingmodell_changed_ptr: (a: number) => number;
  readonly isingmodell_get_M: (a: number) => number;
  readonly isingmodell_get_M_avg: (a: number) => number;
  readonly isingmodell_get_U: (a: number) => number;
  readonly isingmodell_get_U_avg: (a: number) => number;
  readonly isingmodell_get_T: (a: number) => number;
  readonly isingmodell_get_B: (a: number) => number;
  readonly isingmodell_get_S: (a: number) => number;
  readonly isingmodell_get_steps: (a: number) => number;
  readonly isingmodell_get_Spin_at: (a: number, b: number, c: number) => number;
  readonly isingmodell_set_T: (a: number, b: number) => void;
  readonly isingmodell_set_B: (a: number, b: number) => void;
  readonly isingmodell_reset_data: (a: number) => void;
  readonly isingmodell_reset_avgs: (a: number) => void;
  readonly isingmodell_magnetize: (a: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
declare function wasm_bindgen (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
