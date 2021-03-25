import React from 'react';

function Popup() {
  return (
    <div style={styles.main}>
      <h1>Chrome Ext - Popup</h1>
      <form>
        <input type="text"/>
      </form>
    </div>
  )
}

const styles = {
  main: {
    width: '300px',
    height: '600px'
  }
}
export default Popup;
