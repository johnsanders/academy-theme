import React from 'react';
import beckyTunisia from '../../../img/becky_tunisia.jpg';

const Application: React.FC = (): JSX.Element => (
	<div className="featureRow">
		<div className="container-fluid">
			<div className="row align-items-center">
				<div className="col-12 col-md-6">
					<h1 className="mb-3">ماهي عملية التقديم؟</h1>
					<div className="mb-3">
						أولاً/ قم بإعداد مقطع فيديو قصير تخبرنا من خلاله عن نفسك، وقدم لنا قصة ترغب في العمل
						عليها إذا تم قبولك في أكاديمية CNN أبوظبي.
					</div>
					<div className="mb-3">ثانياً/ قم بالتقديم قبل 31 أكتوبر 2020 الساعة 11:59 مساءً.</div>
					<div className="mb-3">
						ثالثاً/ ستتم دعوة المرشحين الذين تم اختيارهم لمقابلة افتراضية مع لجنة اختيار ثلاثية
						تتكون من ممثلين عن CNN وtwofour54 وإيمج نيشن خلال شهر نوفمبر 2020.
					</div>
					<div className="mb-3">
						رابعاً/ سيكون أمام المرشحين المتأهلين مهلة حتى 15 ديسمبر 2020 لتأكيد مشاركتهم معنا،
						وتقديم أي مستندات إضافية أخرى.
					</div>
					<div className="mb-3">خامساً/ يبدأ برنامج أكاديمية CNN أبوظبي في 10 يناير</div>
				</div>
				<div className="col-12 col-md-6">
					<img className="w-100" src={beckyTunisia} />
				</div>
			</div>
		</div>
	</div>
);

export default Application;
