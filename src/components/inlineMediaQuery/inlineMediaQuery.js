import React, {useEffect, useState} from 'react';

export const InlineMediaQuery = () => {
  const mediaMatch = window.matchMedia('(min-width: 500px)');
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = e => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });


  return (
    <div style={styles.container(matches)}>
      <div>First item</div>
      <div>Second item</div>
    </div>);
};

const styles = {
  container: isRowBased => ({
    display: 'flex',
    flexDirection: isRowBased ? 'row' : 'column',
    justifyContent: 'space-around'
  })
};