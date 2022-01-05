import useMediaQuery from '../../../hooks/useMediaQuery';

const HOne = ({children, fontSize, desktopAlign, mobileAlign, color}) =>{
    const isDesktop = useMediaQuery('(min-width: 800px)');
    const customStyles = {
        hOne: isDesktop => ({
          color: color,
          fontSize: fontSize,
          textAlign: isDesktop ? desktopAlign : mobileAlign,
    })
    }
    return(
        <h1 style={customStyles.hOne(isDesktop)} >{children}</h1>
    )
}

export default HOne;