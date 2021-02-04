import React from 'react';

const Video: React.FC = (): JSX.Element => (
	<div className="featureRow">
		<div className="container-fluid">
			<div className="row align-items-center justify-content-center">
				<div className="col-12 col-md-9">
					<h1 className="text-center mb-5">ما هو الفيديو التعريفي القصير؟</h1>
				</div>
				<div className="col-12 col-md-9 text-center mb-5">
					في أكاديمية CNN أبوظبي، ستتاح لك فرصة التعرف على السرد القصصي عبر مختلف المنصات، والالتقاء
					والتفاعل مع الصحفيين في CNN وكذلك المتحدثين الضيوف من مختلف فروع صناعة الإعلام. ولذلك فنحن
					نود التعرف عليك أكثر.
				</div>
				<div className="col-12 col-md-9 text-center mb-5">
					لذا، أرسل لنا مقطع فيديو مدته دقيقة، لتخبرنا من خلاله عن نفسك، وشغفك والأسباب التي تجعلك
					المرشح المناسب ليتم اختيارك من قِبل أكاديمية CNN أبوظبي. اجعل هذا الفيديو قصيراً ولكن
					مبتكراً.
				</div>
				<div className="col-12 text-center">الحد الأقصى لحجم الملف: 100 ميجابايت</div>
			</div>
		</div>
	</div>
);

export default Video;
