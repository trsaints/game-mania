import { RootContextProvider } from '@data/context'
import { Footer, Header, SearchWidget } from '@views/components'
import { Outlet } from 'react-router-dom'
import { DataServiceDictionary } from '@data/types'
import {
	GameService,
	GenreService,
	PlatformService,
	PublisherService,
	TagService
} from '@src/services'
import { LocalDb } from '@data/local-storage'
import { ApiMiddleware } from '@src/middlewares'
import { StartupUtils } from '@src/utils'


const dataServiceDictionary: DataServiceDictionary = {
	games     : GameService,
	genres    : GenreService,
	platforms : PlatformService,
	publishers: PublisherService,
	tags      : TagService
}

const localDb       = new LocalDb('game-mania', 1)
const apiMiddleware = new ApiMiddleware(dataServiceDictionary, localDb)

if (! localDb.isCreated()) {
	await StartupUtils.initializeDb(localDb)
}

function Root() {
	return (
		<RootContextProvider apiMiddleware={apiMiddleware}>
			<Header/>
			<SearchWidget/>
			<Outlet/>
			<Footer/>
		</RootContextProvider>
	)
}

export { Root }