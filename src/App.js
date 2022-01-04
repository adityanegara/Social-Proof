import './styles/global.scss';
import SocialProof from './components/organisms/SocialProof/SocialProof';
import { InlineMediaQuery } from './components/inlineMediaQuery/inlineMediaQuery';
import InlineMediaQueryRefactor from './components/inlineMediaQuery/inlineMediaQueryRefactor';

const App = () =>{
    return(
        <>
            <SocialProof/>
            <InlineMediaQueryRefactor/>
        </>
    )
}

export default App;