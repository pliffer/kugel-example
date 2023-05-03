const kugel = require('kugel');

kugel.init().then(() => {

	const betterExpress = require('kugel-better-express');

	betterExpress.router(router => {

		router.get('/', () => `
			<p>Ola</p>
			<p>Visite <a href="https://github.com/pliffer/kugel-jwt">o repositorio</a> para mais informacoes.</p>
		`);

	});

});