define(function(require) {
	'use strict'
	require('js/dialog.js')
	const dialog = new Dialog()
	const vm = new Vue({
		el: 'body',
		data: {},
		methods: {

			dialog() {
				dialog.custom('.dialog-1')
			}

		}
	})

})
