import { connect } from 'react-redux';

import AboutPanel from './AboutPanel';

const mapStateToProps = (state) => ({ 
  teachers: [ 'Óscar Belmonte', 'Reyes Grangel', 'Ricardo Borillo' ]
});

const mapDispatchToProps = (dispatch) => ({});
  
export default connect(mapStateToProps, mapDispatchToProps)(AboutPanel);