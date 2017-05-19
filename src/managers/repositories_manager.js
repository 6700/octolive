import ApiRoutes from '../api_routes'

const { RepositoriesChest, f } = window;

class RepositoriesManager {
  update = () => {
    f(ApiRoutes.repositories)
        .then((content) => {
          RepositoriesChest.setState({
              repositories: content
          })
        })
  }
}

export default (new RepositoriesManager());
