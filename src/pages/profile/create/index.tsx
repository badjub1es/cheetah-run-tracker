import React from 'react';
import ApplicationContainer from '../../../components/Containers/ApplicationContainer';
import CreateShoe from './components/CreateShoe';

const Create: React.FC = () => {
    return (
        <ApplicationContainer>
            <CreateShoe />
            {/* Add "Add Workout" component */}
        </ApplicationContainer>
    )
}

export default Create;
