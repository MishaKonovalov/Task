import { Route, Switch } from 'react-router'
import { Cabinet } from './pages/Cabinet'
import { Mamory } from './pages/Mamory'

const routes = [
    { path: '/', component: Cabinet },
    { path: '/mamory', component: Mamory },
]

export const Routes = () => {
    return (
        <Switch>
            {routes.map(({ path, component }) => (
                <Route
                    key={path}
                    path={path}
                    exact={true}
                    component={component}
                />
            ))}
            <Route
                render={() => {
                    return <Route path="/" component={Cabinet} />
                }}
            />
        </Switch>
    )
}
