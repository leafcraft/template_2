// Sample reducer structure
const initialState = {
    isSidebarOpen: false,
  };
  
  const toggleSidebarReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_SIDEBAR':
        return {
          ...state,
          isSidebarOpen: !state.isSidebarOpen,
        };
      default:
        return state;
    }
  };
  
  export default toggleSidebarReducer;
  