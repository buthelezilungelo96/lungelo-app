import React from 'react';
import './App.css';
import { StyledEngineProvider } from '@mui/material/styles';
import TopNavBar from './components/TopNavBar/TopNavBar';
import SignInBanner from './components/SignInBanner/SignInBanner';
import WelcomeImage from './components/WelcomeImage/WelcomeImage';
import InformationTab from './components/InformationTab/InformationTab';
import CatergoriesLinks from './components/CategoriesLinks/CatergoriesLinks';
import InternshipTab from './components/InternshipTab/InternshipTab';
import JobCategoryLinks from './components/JobCategoryLinks/JobCategoryLinks';
import PostJobBanner from './components/PostJobBanner/PostJobBanner';
import SoftwareToolsTab from './components/SoftwareToolsTab/SoftwareToolsTab';
import SoftwareToolsLinks from './components/SoftwareToolsLinks/SoftwareToolsLinks';


function App() {
  return (
    <div className="App"> 

    <h1>Lungelo linkedin Project</h1>

    <TopNavBar/>
    <SignInBanner/>
    <WelcomeImage/>
    <InformationTab/>
    <CatergoriesLinks/>
    <InternshipTab/>
    <JobCategoryLinks/> 
    <PostJobBanner/>
    <SoftwareToolsTab/>
    <SoftwareToolsLinks/>
    

    </div>
  );
}

export default App;
