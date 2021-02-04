import React from 'react';

const Overview: React.FC = (): JSX.Element => (
	<div className="featureRow">
		<div className="container-fluid">
			<div className="row align-items-center">
				<div className="col-12">
					<h1 className="text-center mb-5">ما الذي يجب عليك توفيره في عرضك؟</h1>
				</div>
				<div className="col-12 col-md-6">
					فكر في موضوع أو قصة تثير اهتمامك، وترغب في مشاركتها مع جمهور عالمي. ثم اكتب ملخصاً مؤثراً
					وواضحاً مكون من 500 كلمة، توصل لنا من خلاله كيف أن زاويتك في الطرح، أو الطريقة التي تريد
					بها تقديم القصة، فريدة من نوعها وتتناسب مع وقتنا الحالي.
				</div>
				<div className="col-12 col-md-6">
					<em className="d-block mb-4">حاول الإجابة عن الأسئلة التالية في عرضك التقديمي:</em>
					<ul>
						<li>ما هي قصتك؟</li>
						<li>لماذا قد يهتم الجمهور العالمي بالتعرف عليها؟</li>
						<li>كيف تتميز زاوية الطرح الخاصة بك؟</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
);

export default Overview;
