
import { ThemeProvider } from '@mui/material';
import ConstructionNotice from '../../components/molecules/ConstructionNotice';
import Footer from '../../components/molecules/Footer';
import musicDbTheme from '../../styles/music-database/musicDbTheme';
import DocumentTitle from "../../utils/DocumentTitle";

import "../../styles/music-database/music-database.scss";

function MusicDatabase() {

    DocumentTitle("Music Database");

	return (
		<ThemeProvider theme={musicDbTheme}>
			<div id="music-database">
				<ConstructionNotice title={"Music Database"} />
				<Footer bgColor="" textColor="black" />
			</div>
		</ThemeProvider>
	);

}

export default MusicDatabase;