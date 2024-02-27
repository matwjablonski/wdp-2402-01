import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import Swipeable from '../../common/Swipeable/Swipeable';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    isAnimating: false,
  };

  handlePageChange = newPage => {
    this.setState({ isAnimating: true });
    setTimeout(() => {
      this.setState({ activePage: newPage, isAnimating: false });
    }, 300);
  };

  handleCategoryChange = newCategory => {
    this.setState({ isAnimating: true });
    setTimeout(() => {
      this.setState({ activeCategory: newCategory, activePage: 0, isAnimating: false });
    }, 300);
  };

  handleSwipeLeft = () => {
    const { activePage } = this.state;
    const pagesCount = this.calculatePagesCount();
    if (activePage < pagesCount - 1) {
      this.setState({ activePage: activePage + 1 });
    }
  };

  handleSwipeRight = () => {
    const { activePage } = this.state;
    if (activePage > 0) {
      this.setState({ activePage: activePage - 1 });
    }
  };

  caluclateProductsPerPage = () => {
    const { rwdMode } = this.props;
    if (rwdMode === 'wideScreen') return 4;
    if (rwdMode === 'desktop') return 3;
    if (rwdMode === 'tablet' || rwdMode === 'smallTablet') return 2;
    if (rwdMode === 'mobile' || rwdMode === 'smallMobile') return 1;
  };

  calculatePagesCount = () => {
    const { products } = this.props;
    const { activeCategory } = this.state;
    const categoryProducts = products.filter(item => item.category === activeCategory);
    return Math.ceil(categoryProducts.length / this.caluclateProductsPerPage());
  };

  render() {
    const { categories, products } = this.props;
    const { activeCategory, activePage, isAnimating } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = this.calculatePagesCount();

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage ? styles.active : ''}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={`${styles.root} ${isAnimating ? styles.fade : ''}`}>
        <Swipeable
          leftAction={this.handleSwipeLeft}
          rightAction={this.handleSwipeRight}
        >
          <div className='container'>
            <div className={styles.panelBar}>
              <div className='row no-gutters align-items-end flex-column flex-md-row'>
                <div className={'col-auto ' + styles.heading}>
                  <h3>New furniture</h3>
                </div>
                <div className={'col ' + styles.menu}>
                  <ul>
                    {categories.map(item => (
                      <li key={item.id}>
                        <a
                          className={item.id === activeCategory ? styles.active : ''}
                          onClick={() => this.handleCategoryChange(item.id)}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={'col-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
            </div>
            <div className='row'>
              {categoryProducts
                .slice(
                  activePage * this.caluclateProductsPerPage(),
                  (activePage + 1) * this.caluclateProductsPerPage()
                )
                .map(item => (
                  <div key={item.id} className='col-12 col-sm-6 col-lg-4 col-xl-3'>
                    <ProductBox {...item} />
                  </div>
                ))}
            </div>
          </div>
        </Swipeable>
      </div>
    );
  }
}

const mapStateToProps = state => ({ rwdMode: state.rwdMode });

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
  rwdMode: PropTypes.string,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default connect(mapStateToProps)(NewFurniture);
