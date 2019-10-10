import React from 'react';
import randomKey from 'random-key';
import AdSense from 'react-adsense';

const Card = (props) => {
	const { article } = props;

	switch (article.type) {
		case 'wide':
			return (
				<a href={article.url} target='_blank' className='grid-item wide'>
					{article.label ? (
						<div className='head-label'>
							<h3>
								{article.label}
								<div className='icon'>
									<i className='fas fa-angle-right' />
								</div>{' '}
							</h3>
						</div>
					) : null}
					{!article.label ? <h1>{article.title}</h1> : null}
					{article.urlToImage ? (
						<div className='img'>
							<img alt='new' src={article.urlToImage} />
							{article.label ? <h2>{article.title}</h2> : null}{' '}
						</div>
					) : null}

					{article.related ? (
						article.related.map((element) => {
							return (
								<div key={randomKey.generate()}>
									<hr />
									<div className='related-item'>
										{element.urlToImage ? <img alt='sda' src={element.urlToImage} /> : null}
										<p>{element.title}</p>
									</div>
								</div>
							);
						})
					) : null}
				</a>
			);
		case 'ad':
			return (
				<a href={article.url} target='_blank' className='grid-item'>
					<AdSense.Google client='ca-pub-3527634309961159' slot='2382985255' />
				</a>
			);
		default:
			return (
				<a href={article.url} target='_blank' className={article.related ? 'grid-item related' : 'grid-item'}>
					<h3>{article.label}</h3>
					{article.urlToImage ? (
						<div className='img'>
							<img alt='new' src={article.urlToImage} /> <h2>{article.title}</h2>{' '}
						</div>
					) : null}

					{article.related ? (
						article.related.map((element) => {
							return (
								<div key={randomKey.generate()}>
									<hr />
									<div className='related-item'>
										{element.urlToImage ? <img alt='sda' src={element.urlToImage} /> : null}
										<p>{element.title}</p>
									</div>
								</div>
							);
						})
					) : null}
				</a>
			);
	}
};

export default Card;
