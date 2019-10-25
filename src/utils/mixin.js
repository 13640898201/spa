import { mapGetters, mapActions } from 'vuex'

export const userMessageMixin = {
  computed: {
    ...mapGetters([
    	'khdxdh',
    	'hymc',
    	'jgkhdxdh',
    	'jgmc',
    	'xtrq',
    	'jsfl',
    	'db'
    ])
  },
  methods: {
    ...mapActions([
    	'setKhdxdh',
    'setHymc',
    'setJgkhdxdh',
    'setJgmc',
    'setXtrq',
    'setJsfl',
    'setDb'
    ])
  }
}
