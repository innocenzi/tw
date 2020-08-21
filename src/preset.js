const { Preset } = require('use-preset');

// prettier-ignore
module.exports = Preset.make('tailwindcss')
	.editJson('package.json')
		.title('Add dependencies')
		.merge({
			devDependencies: {
				tailwindcss: '^1.7',
				autoprefixer: '^9.8'
			}
		})
		.chain()

	.copyTemplates('skip')

	.installDependencies()
		.for('node');
