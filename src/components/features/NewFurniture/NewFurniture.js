import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';

export class NewFurniture extends React.Component {
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

  render() {
    const { categories, products, rwdMode } = this.props;
    const { activeCategory, activePage, isAnimating } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    let productsPerPage = 4;
    if (rwdMode === 'desktop') productsPerPage = 3;
    if (rwdMode === 'tablet') productsPerPage = 2;
    if (rwdMode === 'mobile') productsPerPage = 1;
    const pagesCount = Math.ceil(categoryProducts.length / productsPerPage);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={`${styles.root} ${isAnimating ? styles.fade : ''}`}>
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
                        className={item.id === activeCategory && styles.active}
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
              .slice(activePage * productsPerPage, (activePage + 1) * productsPerPage)
              .map(item => (
                <div key={item.id} className='col-12 col-sm-6 col-lg-4 col-xl-3'>
                  <ProductBox {...item} />
                </div>
              ))}
          </div>
        </div>
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
