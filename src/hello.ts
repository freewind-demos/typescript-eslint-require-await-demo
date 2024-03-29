
async function asyncHello(name: string): Promise<string> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(`Hello ${name}`);
		}, 1000);
	});
}

async function test() {
	const value = asyncHello("React");
	console.log(value);
}

test();
