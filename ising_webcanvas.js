let wasm_bindgen;
(function() {
    const __exports = {};
    let script_src;
    if (typeof document !== 'undefined' && document.currentScript !== null) {
        script_src = new URL(document.currentScript.src, location.href).toString();
    }
    let wasm = undefined;

    const cachedTextDecoder = (typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8', { ignoreBOM: true, fatal: true }) : { decode: () => { throw Error('TextDecoder not available') } } );

    if (typeof TextDecoder !== 'undefined') { cachedTextDecoder.decode(); };

    let cachedUint8Memory0 = null;

    function getUint8Memory0() {
        if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
            cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
        }
        return cachedUint8Memory0;
    }

    function getStringFromWasm0(ptr, len) {
        ptr = ptr >>> 0;
        return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
    }
    /**
    */
    class IsingModell {

        static __wrap(ptr) {
            ptr = ptr >>> 0;
            const obj = Object.create(IsingModell.prototype);
            obj.__wbg_ptr = ptr;

            return obj;
        }

        __destroy_into_raw() {
            const ptr = this.__wbg_ptr;
            this.__wbg_ptr = 0;

            return ptr;
        }

        free() {
            const ptr = this.__destroy_into_raw();
            wasm.__wbg_isingmodell_free(ptr);
        }
        /**
        * @param {number} size
        * @param {number} b
        * @param {number} t
        * @param {number} i
        * @param {number} up
        * @param {bigint} seed
        * @returns {IsingModell}
        */
        static new(size, b, t, i, up, seed) {
            const ret = wasm.isingmodell_new(size, b, t, i, up, seed);
            return IsingModell.__wrap(ret);
        }
        /**
        * @param {number} mc_steps
        * @returns {number}
        */
        run(mc_steps) {
            const ret = wasm.isingmodell_run(this.__wbg_ptr, mc_steps);
            return ret >>> 0;
        }
        /**
        * @returns {number}
        */
        grid_ptr() {
            const ret = wasm.isingmodell_grid_ptr(this.__wbg_ptr);
            return ret >>> 0;
        }
        /**
        * @returns {number}
        */
        changed_ptr() {
            const ret = wasm.isingmodell_changed_ptr(this.__wbg_ptr);
            return ret >>> 0;
        }
        /**
        * @returns {number}
        */
        get_M() {
            const ret = wasm.isingmodell_get_M(this.__wbg_ptr);
            return ret;
        }
        /**
        * @returns {number}
        */
        get_M_avg() {
            const ret = wasm.isingmodell_get_M_avg(this.__wbg_ptr);
            return ret;
        }
        /**
        * @returns {number}
        */
        get_U() {
            const ret = wasm.isingmodell_get_U(this.__wbg_ptr);
            return ret;
        }
        /**
        * @returns {number}
        */
        get_U_avg() {
            const ret = wasm.isingmodell_get_U_avg(this.__wbg_ptr);
            return ret;
        }
        /**
        * @returns {number}
        */
        get_T() {
            const ret = wasm.isingmodell_get_T(this.__wbg_ptr);
            return ret;
        }
        /**
        * @returns {number}
        */
        get_B() {
            const ret = wasm.isingmodell_get_B(this.__wbg_ptr);
            return ret;
        }
        /**
        * @returns {number}
        */
        get_S() {
            const ret = wasm.isingmodell_get_S(this.__wbg_ptr);
            return ret >>> 0;
        }
        /**
        * @returns {bigint}
        */
        get_steps() {
            const ret = wasm.isingmodell_get_steps(this.__wbg_ptr);
            return BigInt.asUintN(64, ret);
        }
        /**
        * @param {number} x
        * @param {number} y
        * @returns {number}
        */
        get_Spin_at(x, y) {
            const ret = wasm.isingmodell_get_Spin_at(this.__wbg_ptr, x, y);
            return ret;
        }
        /**
        * @param {number} newT
        */
        set_T(newT) {
            wasm.isingmodell_set_T(this.__wbg_ptr, newT);
        }
        /**
        * @param {number} newB
        */
        set_B(newB) {
            wasm.isingmodell_set_B(this.__wbg_ptr, newB);
        }
        /**
        */
        reset_data() {
            wasm.isingmodell_reset_data(this.__wbg_ptr);
        }
        /**
        */
        reset_avgs() {
            wasm.isingmodell_reset_avgs(this.__wbg_ptr);
        }
        /**
        */
        magnetize() {
            wasm.isingmodell_magnetize(this.__wbg_ptr);
        }
    }
    __exports.IsingModell = IsingModell;

    async function __wbg_load(module, imports) {
        if (typeof Response === 'function' && module instanceof Response) {
            if (typeof WebAssembly.instantiateStreaming === 'function') {
                try {
                    return await WebAssembly.instantiateStreaming(module, imports);

                } catch (e) {
                    if (module.headers.get('Content-Type') != 'application/wasm') {
                        console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                    } else {
                        throw e;
                    }
                }
            }

            const bytes = await module.arrayBuffer();
            return await WebAssembly.instantiate(bytes, imports);

        } else {
            const instance = await WebAssembly.instantiate(module, imports);

            if (instance instanceof WebAssembly.Instance) {
                return { instance, module };

            } else {
                return instance;
            }
        }
    }

    function __wbg_get_imports() {
        const imports = {};
        imports.wbg = {};
        imports.wbg.__wbindgen_throw = function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        };

        return imports;
    }

    function __wbg_init_memory(imports, maybe_memory) {

    }

    function __wbg_finalize_init(instance, module) {
        wasm = instance.exports;
        __wbg_init.__wbindgen_wasm_module = module;
        cachedUint8Memory0 = null;


        return wasm;
    }

    function initSync(module) {
        if (wasm !== undefined) return wasm;

        const imports = __wbg_get_imports();

        __wbg_init_memory(imports);

        if (!(module instanceof WebAssembly.Module)) {
            module = new WebAssembly.Module(module);
        }

        const instance = new WebAssembly.Instance(module, imports);

        return __wbg_finalize_init(instance, module);
    }

    async function __wbg_init(input) {
        if (wasm !== undefined) return wasm;

        if (typeof input === 'undefined' && script_src !== 'undefined') {
            input = script_src.replace(/\.js$/, '_bg.wasm');
        }
        const imports = __wbg_get_imports();

        if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
            input = fetch(input);
        }

        __wbg_init_memory(imports);

        const { instance, module } = await __wbg_load(await input, imports);

        return __wbg_finalize_init(instance, module);
    }

    wasm_bindgen = Object.assign(__wbg_init, { initSync }, __exports);

})();
