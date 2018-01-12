export default function(state = null, action) {
	switch(action.type) {
	case 'SHEEP_SELECTED':
		return action.payload;
	}
	
	return state
}