import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import products from './products.json';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import img1 from './images/cards/img1.png';
// import img2 from './images/cards/img2.png';
// import img3 from './images/cards/img3.png';
// import img4 from './images/cards/img4.png';
// import img5 from './images/cards/img5.png';
// import img6 from './images/cards/img6.png';
// import img7 from './images/cards/img7.png';
// import img8 from './images/cards/img8.png';
// import img9 from './images/cards/img9.png';
// import img10 from './images/cards/img10.png';
// import img11 from './images/cards/img11.png';
// import img12 from './images/cards/img12.png';
// import img13 from './images/cards/img13.png';
// import img14 from './images/cards/img14.png';
// import img15 from './images/cards/img15.png';
// import img16 from './images/cards/img16.png';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 150,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  price: {
    marginLeft: '45%',
  },
  description: {
    fontFamily: `'Alegreya Sans', sans-serif`,
    fontSize: '20px',
  },
});

const prices = [], titles = [], descriptions = [], ribbons = [], imgs = [];

const fillArrays = (products) => {
  for (let i=0; i<products.length; i++) {
    let p = "$" + products[i].price + ".00";
    prices.push(p);
    titles.push(products[i].title);
    descriptions.push(products[i].description);
    ribbons.push(products[i].ribbon);
    let image = "img"+ products[i].id;
    imgs.push(image);
  }
};
fillArrays(products.products);

class ProductCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={titles[0]}
          subheader={ribbons[0]}
        />
        <CardMedia
          className={classes.media}
          image={img1}
          title="Product"
          style={styles.media}
        />
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Add to Cart">
            <ShoppingCart />
          </IconButton>
          <Typography className={classes.price} component="h6" variant="h6"
           children={prices[0]}></Typography>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
          <ExpandMoreIcon />
          </IconButton>
        </CardActions>

        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography className={classes.description} component="p"
              children={descriptions[0]}></Typography>
          </CardContent>
        </Collapse>
      </Card>
      
    );
  }
}

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCard);
