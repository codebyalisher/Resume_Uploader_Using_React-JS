import {Blog, Cta} from './importallcomponents';
import{Blogtitle,Blogdesc,Footer,Navbar} from './exportsections';
import Button from '@material-ui/core/Button';
import {useStyles} from './custommaterialui';

export default function BlogCrt() {
  const classes = useStyles();
  return <Button className={classes.root}>Hook</Button>;
}


