const kugel = require('kugel');

kugel.init().then(() => {

	const betterExpress = require('kugel-better-express');

	betterExpress.router(router => {

		router.get('/', () => 'Hello World!');

	});

});