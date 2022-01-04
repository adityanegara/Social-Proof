import useMediaQuery from "../../hooks/useMediaQuery";

const InlineMediaQueryRefactor = () =>{
    const isRowBased = useMediaQuery(`(min-width: 500px)`);
    const styles = {
        container: isRowBased => ({
          display: 'flex',
          flexDirection: isRowBased ? 'row' : 'column',
          justifyContent: 'space-around'
    })
    }
    return(
        <div style={styles.container(isRowBased)}>
            <div>First Item</div>
            <div>Second Item</div>
        </div>
    );
}

export default InlineMediaQueryRefactor;