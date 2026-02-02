import PortfolioHero from "./PortfolioHero";
import PortfolioOverview from "./PortfolioOverview";
import WorkGrid from "./WorkGrid";
import Philosophy from "./Philosophy";
import PortfolioCTA from "./PortfolioCTA";

const Portfolio = () => {
    return (
        <div>
            <PortfolioHero />
            <PortfolioOverview />
            <WorkGrid />
            <Philosophy />
            <PortfolioCTA />
        </div>
    );
};

export default Portfolio;
