import React from 'react';

const Overview: React.FC = (): JSX.Element => (
	<div className="featureRow">
		<div className="container-fluid">
			<div className="row">
				<div className="col-12 col-md-6">
					<iframe
						allow="autoplay; fullscreen; picture-in-picture"
						frameBorder="0"
						height="100%"
						src="https://player.vimeo.com/video/507994481"
						width="100%"
					/>
				</div>
				<div className="col-12 col-md-6">
					<h1>من يمكنه تقديم طلب المشاركة؟</h1>
					<div className="mb-3">
						تقبل أكاديمية CNN أبوظبي الطلبات المقدمة من مواطني دولة الإمارات العربية المتحدة
						والمقيمين الذين تزيد أعمارهم عن 21 عاماً، ممن تتوافر لديهم خلفية و / أو اهتمام بصناعة
						الإعلام والسرد القصصي على مختلف المنصات.
					</div>
					<div>
						وتعتبر أكاديمية CNN أبوظبي هي دورة بدوام كامل مدتها خمسة أسابيع. سيتعين على المتقدمين
						الذين يتم اختيارهم للمشاركة بالدورة حضور المحاضرات عبر الإنترنت، والتواجد في ورش العمل
						طوال مدة البرنامج، مع الالتزام بجميع إجراءات التباعد الاجتماعي التي قد تكون سارية في
						يناير 2021.
					</div>
					<div>
						يجب أن يتقن المتقدمون التحدث والكتابة باللغة الإنجليزية، علماً بأن الدورة ستقدم حصراً
						باللغة الإنجليزية.
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Overview;
