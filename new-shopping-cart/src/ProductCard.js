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
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  card: {
    width: 400,
  },
  media: {
    height: 150,
    paddingTop: '56.25%', 
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

class ProductCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      displayedProducts: products.products
    };
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid item xs={4}>
        <Card className={classes.card}>
          <CardHeader
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={this.props.info.title}
            subheader={this.props.info.ribbon}
          />
          <CardMedia
            className={classes.media}
            image={require(`./images/cards/img${this.props.info.id}.png`)}
            title="Product"
            style={styles.media}
          />
          <CardActions className={classes.actions} disableActionSpacing>

            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>

            <IconButton aria-label="Add to Cart" onClick={()=>this.props.cartOnClick(this.props.info.id)}>
              <ShoppingCart />
            </IconButton>

            <Typography className={classes.price} component="h6" variant="h6"
             children={'$'+(this.props.info.price).toFixed(2)}></Typography>
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
                children={this.props.info.description}></Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Grid>

    );
  }
}

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCard);
