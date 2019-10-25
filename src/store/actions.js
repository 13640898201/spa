const actions = {//修改属性值 this.setKhdxdh(khdxdh)
		setKhdxdh: ({
			commit
		}, khdxdh) => {
			return commit('SET_KHDXDH', khdxdh)
		},
		setHymc: ({
			commit
		}, hymc) => {
			return commit('SET_HYMC', hymc)
		},
		setJgkhdxdh: ({
			commit
		}, jgkhdxdh) => {
			return commit('SET_JGKHDXDH', jgkhdxdh)
		},
		setJgmc: ({
			commit
		}, jgmc) => {
			return commit('SET_JGMC', jgmc)
		},
		setXtrq: ({
			commit
		}, xtrq) => {
			return commit('SET_XTRQ', xtrq)
		},
		setJsfl: ({
			commit
		}, jsfl) => {
			return commit('SET_JSFL', jsfl)
		},
		setDb: ({
			commit
		}, db) => {
			return commit('SET_DB', db)
		},
	}
export default actions