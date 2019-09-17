'use strict';

const match = (array, value) =>
	array.some(x => (x instanceof RegExp ? x.test(value) : x === value));

const dargs = (input, options) => {
	const args = [];
	let extraArgs = [];
	let separatedArgs = [];

	options = Object.assign({
		useEquals: true
	}, options);

	const makeArg = (key, value) => {
		key =
			'--' +
			(options.allowCamelCase ?
				key :
				key.replace(/[A-Z]/g, '-$&').toLowerCase());

		if (options.useEquals) {
			args.push(key + (value ? `=${value}` : ''));
		} else {
			args.push(key);

			if (value) {
				args.push(value);
			}
		}
	};

	const makeAliasArg = (key, value) => {
		args.push(`-${key}`);

		if (value) {
			args.push(value);
		}
	};

	// TODO: Use Object.entries() when targeting Node.js 8
	for (let key of Object.keys(input)) {
		const value = input[key];
		let pushArg = makeArg;

		if (Array.isArray(options.excludes) && match(options.excludes, key)) {
			continue;
		}

		if (Array.isArray(options.includes) && !match(options.includes, key)) {
			continue;
		}

		if (typeof options.aliases === 'object' && options.aliases[key]) {
			key = options.aliases[key];
			pushArg = makeAliasArg;
		}

		if (key === '--') {
			if (!Array.isArray(value)) {
				throw new TypeError(
					`Expected key \`--\` to be Array, got ${typeof value}`
				);
			}

			separatedArgs = value;
			continue;
		}

		if (key === '_') {
			if (!Array.isArray(value)) {
				throw new TypeError(
					`Expected key \`_\` to be Array, got ${typeof value}`
				);
			}

			extraArgs = value;
			continue;
		}

		if (value === true) {
			pushArg(key, '');
		}

		if (value === false && !options.ignoreFalse) {
			pushArg(`no-${key}`);
		}

		if (typeof value === 'string') {
			pushArg(key, value);
		}

		if (typeof value === 'number' && !Number.isNaN(value)) {
			pushArg(key, String(value));
		}

		if (Array.isArray(value)) {
			for (const arrayValue of value) {
				pushArg(key, arrayValue);
			}
		}
	}

	for (const x of extraArgs) {
		args.push(String(x));
	}

	if (separatedArgs.length > 0) {
		args.push('--');
	}

	for (const x of separatedArgs) {
		args.push(String(x));
	}

	return args;
};

module.exports = dargs;
