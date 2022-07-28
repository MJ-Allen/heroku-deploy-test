import React from "react";
import FoodRun from '../../assets/images/foodrun.png';
import Seo from '../../assets/images/seo.png';
import neverbelate from '../../assets/images/neverbelateschedule.png';



function Portfolio () {
    
    return (
         <section id="portfoliosection">
           <div className="center" id='portfolio'>
                <h1 className="header">My Creations</h1>
            </div>
        
        <div class='img-card'>
                <h2>Food Run Interactive Application</h2>
				  
					<img className="portfolioimage" src={FoodRun} alt="Screenshot of foodrun game" />
				<a href="https://pacific-everglades-44013.herokuapp.com/">
                Link to the live site application
				</a>
				<a href ="hhttps://github.com/untjala/food-run">
                    Link to Rep Application</a>
            </div>

            <div class='img-card'>
                <h2>Never Be Late Application</h2>
				
					<img src={neverbelate} alt="Screenshot of planner" />
				<a href="https://mj-allen.github.io/neverbelate/">
					Link to the live site application
				</a>
				<a href ="https://github.com/MJ-Allen/neverbelate">Link to Rep Application</a>
            </div>

            <div class='img-card'>
                <h2>SEO Refactor Application</h2>
				
					<img src={Seo} alt="Screenshot of application" />
				<a href="https://mj-allen.github.io/seo-refactor/">
                Link to the live site application
				</a>
				<a href ="https://github.com/MJ-Allen/seo-refactor">Link to Rep Application</a>
            </div>

         </section>
    );
}

export default Portfolio;