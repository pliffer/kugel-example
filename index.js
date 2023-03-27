let kugel =  require('kugel');

kugel.init().then(() => {

	let betterExpress =  require('kugel-better-express');

	betterExpress.router(router  => {

		router.get('/', () =>  'Hello World!');

	});

});