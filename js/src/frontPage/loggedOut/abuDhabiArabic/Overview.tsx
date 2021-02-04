import React from 'react';

const Overview: React.FC = (): JSX.Element => (
	<div className="featureRow">
		<div className="container-fluid">
			<div className="row">
				<div className="col-12 col-md-6">
					<h1>نظرة عامة على الدورة</h1>
					<div className="mb-3">
						من خلال ورش العمل والندوات الافتراضية مع الصحفيين الرواد في CNN، سيتعرف المشاركون على
						كيفية جمع CNN للمعلومات، والتحقق من مصادرها، وإنتاج المحتوى لمنصاتها المتعددة. ومن خلال
						التواجد في ورش العمل في CNN أبوظبي، سيحصل المشاركون على نظرة من خلف الكواليس على إنتاج
						برنامج Connect the World with Becky Anderson، على الهواء مباشرة من CNN أبوظبي
					</div>
					<div>
						وعلى مدار الدورة، سيعمل المشاركون أيضاً على إنتاج محتوى خاص بهم لمختلف المنصات. كما
						سيقومون بطرح فكرة قصة، والحصول على الموافقة عليها، والعمل مع فريق من المصورين والمحررين
						المحترفين لكتابة السيناريو الخاص بها، وتصويرها وتحريرها، وتقديم تلك القصة. هذا وسيتم عرض
						أفضل محتوى على CNN
					</div>
				</div>
				<div className="col-12 col-md-6">
					<iframe
						allow="autoplay; fullscreen; picture-in-picture"
						frameBorder="0"
						height="100%"
						src="https://player.vimeo.com/video/507988883"
						width="100%"
					/>
				</div>
			</div>
		</div>
	</div>
);

export default Overview;
