import Home from "./components/pages/Home/Home";
import ProductList from "./components/pages/ProductList/ProductList";
import ProductPage from "./components/pages/ProductPage/ProductPage";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotFound from "./components/pages/NotFound/NotFound";
import {getAllProducts} from "./api/Product"
import {QueryClientProvider, QueryClient} from "react-query";

const queryClient = new QueryClient();

const App = () => {

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/products" component={ProductList}/>
                    <Route path="/product" component={ProductPage}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        </QueryClientProvider>

    );
};

export default App;
