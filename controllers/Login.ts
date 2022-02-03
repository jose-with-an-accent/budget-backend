import UserUtils from '../models/User';
USER_STORE: {
	findByUsername: (username) => ({
		UserUtils.findOne()
	})
}