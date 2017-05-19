
import Chest from './chest'

const RepositoriesChest = new Chest('repositories', {
  repositories: []
});

window.RepositoriesChest = RepositoriesChest

export default RepositoriesChest;
