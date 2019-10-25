import Vue from 'vue'
import Vuex from 'vuex'
import userMessage from './modules/userMessage'

import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		userMessage
	},
	getters,
	actions
})