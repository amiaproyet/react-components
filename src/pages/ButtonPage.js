import {GoBell, GoCloudDownload, GoDatabase} from 'react-icons/go';

import Button from "../components/Button";


function ButtonPage () {
    return(
        <div>
            <div>
                <Button primary rounded >
                    <GoBell />
                    Click here!!
                </Button>
            </div>
            <div>
                <Button secondary >
                    <GoCloudDownload />
                    Subscribe
                </Button>
            </div>
            <div>
                <Button success>
                    <GoDatabase />
                    Buy now
                </Button>
            </div>
            <div>
                <Button warning rounded>Sign up</Button>
            </div>
            <div>
                <Button danger>Sign up</Button>
            </div>
        </div>

    )
};

export default ButtonPage