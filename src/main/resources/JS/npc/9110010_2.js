importPackage(java.lang);
importPackage(Packages.client);
importPackage(Packages.client.inventory);
importPackage(Packages.server);
importPackage(Packages.constants);
importPackage(Packages.net.channel);
importPackage(Packages.tools);
importPackage(Packages.scripting);
importPackage(Packages.tools.packet);
importPackage(Packages.tools.data);
importPackage(Packages.tools);
var status = 0;
var itemList =   
Array(   
		//	Array(4000463,10,1,1),//�����
			Array(1122017,2,1,1),//�����׹
			Array(1002357,3,1,1),//����ͷ��
			//Array(1122000,5,1,1),//��������
			//Array(1022144,5,1,1),//����
			//Array(1012474,5,1,1),//����
			Array(1092030,20,1,1),//��Ҷ��
			Array(1092029,10,1,1),//��Ŷ�
			Array(1092021,10,1,1),//���Ӷ�
			Array(1092008,20,1,1),//����
			
//����
			Array(2070006,15,1,1),  //����
			Array(2070007,15,1,1),  //����
			Array(2070005,25,1,1),  //��Ǯ
			Array(1472033,50,1,1),  //����ȭ��
			Array(1472031,80,1,1),  //��֮ȭ
			Array(1332027,80,1,1),  //������
			Array(1332052,80,1,1),  //���������
			Array(1472029,200,1,1),  //�������
			Array(1472025,100,1,1),  //��ս��ȭ��
			Array(1082144,200,1,1),  //�ù�����
			Array(1040118,100,1,1),  //��۴�����
			Array(1060107,200,1,1),  //��ɫ������
			Array(1050099,200,1,1),  //��������
//սʿ
			Array(1402037,5,1,1),//������
			Array(1432011,40,1,1),  //������ħǹ
			Array(1432030,20,1,1),  //����
			//Array(1402016,5,1,1),  //������
			Array(1302023,40,1,1),  //������
			Array(1302056,50,1,1),  //һ������
			Array(1422013,100,1,1),  //ʨ��֮��
			Array(1402035,50,1,1),  //ն�쵶
			Array(1402005,100,1,1),  //նħ��
			Array(1312015,100,1,1),  //ս��֮��
			Array(1422027,100,1,1),  //̩̹֮��
			Array(1402012,100,1,1),  //������
			Array(1422009,200,1,1),  //����֮��
			Array(1092027,150,1,1),  //��ʥʮ�ֶ�
			Array(1002532,100,1,1),  //��ɫ������ͷ��
			Array(1072222,100,1,1),  //����սѥ

//��ʦ
		//	Array(1372041,10,1,1),  //����֮��
		//	Array(1372032,10,1,1),  //��̫������
			Array(1382047,30,1,1),  //�����鳤��
			Array(1372037,100,1,1),  //���������
		//	Array(1372039,10,1,1),  //����֮��
			Array(1382045,30,1,1),  //�����鳤��
			Array(1372035,100,1,1),  //���������
		//	Array(1372040,10,1,1),  //�綾֮��
			Array(1382046,30,1,1),  //�����鳤��
			Array(1372036,100,1,1),  //���������
		//	Array(1372042,10,1,1),  //����֮��
			Array(1382048,30,1,1),  //�����鳤��
			Array(1372038,100,1,1),  //���������
			Array(1372010,50,1,1),  //�Ȼ�
			Array(1382035,50,1,1),  //��������
			Array(1372009,80,1,1),  //�ȱ�Ϊ��
			Array(1372016,150,1,1),  //��˶���
			Array(1002253,200,1,1),  //����ʥ֮��
			Array(1050074,150,1,1),  //�����ɷ�
			Array(1051097,150,1,1),  //�ڼ�˾����
			Array(1072209,100,1,1),  //��˹��Ь
			Array(1050105,100,1,1),  //�һ�ħ����
			
//������
			Array(1462018,80,1,1),  //���׻�����
			Array(1452017,80,1,1),  //ħ��֮��
			Array(1452019,80,1,1),  //��ӥ��
			Array(1452021,80,1,1),  //��ӥ��
			Array(1462017,80,1,1),  //�ڰ�ʥ����
			Array(1452011,100,1,1),  //����
			Array(1072205,150,1,1),  //ҹ����ѥ
			Array(1050108,150,1,1),  //������
			
			Array(1032080, 150, 1, 1),//һ������֮�Ͷ���
			Array(1132036, 150, 1, 1),//һ������֮������
			Array(1122081, 150, 1, 1),//һ������֮������
			Array(1032081, 80, 1, 1),//��������֮�Ͷ���
			Array(1132037, 80, 1, 1),//��������֮������
			Array(1122082, 80, 1, 1),//��������֮������
			Array(1302143, 150, 1, 1),//һ������֮�͵��ֽ�
			Array(1312058, 150, 1, 1),//һ������֮�͵��ָ�
			Array(1322086, 150, 1, 1),//һ������֮�͵��ֶ���
			Array(1332121, 150, 1, 1),//һ������֮�Ͷ̽�-��
			Array(1332116, 150, 1, 1),//һ������֮�Ͷ̽�-��
			Array(1372074, 150, 1, 1),//һ������֮�Ͷ���
			Array(1382095, 150, 1, 1),//һ������֮�ͳ���
			Array(1402086, 150, 1, 1),//һ������֮��˫�ֽ�
			Array(1412058, 150, 1, 1),//һ������֮��˫�ָ�
			Array(1422059, 150, 1, 1),//һ������֮��˫�ֶ���
			Array(1442107, 150, 1, 1),//һ������֮��ì
			Array(1452102, 150, 1, 1),//һ������֮�͹�
			Array(1462087, 150, 1, 1),//һ������֮����
//����
			Array(2022219, 400, 1, 1),//���������
			Array(2022223, 200, 1, 1),//��������
			Array(2022220, 150, 1, 1),//�ǹ⾫������
			Array(2022216, 200, 1, 1),//Ģ��������
			Array(2022217, 100, 1, 1),//Ƥ��ū˹����
			Array(2022218, 200, 1, 1),//������ͼ˹����
			Array(2022245, 80, 1, 1),//����ֹͣ��
//��װ
			Array(1003005,500,1,1),//��Ҷ����ͷ��
			Array(1072408,200,1,1),//��Ҷ����Ь
			Array(1052214,200,1,1),//��Ҷ������
			Array(1082255,200,1,1),//��Ҷ��������
			Array(1050293,200,1,1),//��̲˧��װ
			Array(1004640,200,1,1),//�������˰���ñ
			Array(1052634,200,1,1),//���׳���
			Array(1051409,200,1,1),//������˹Ů��
			Array(1042078,200,1,1),//ˮ�ַ�
			Array(1052998,200,1,1),//������������
			Array(1052224,200,1,1),//��ݮbabyװ
			Array(1042198,200,1,1),//�ʺ�t��
			Array(1042204,200,1,1),//����t��
			Array(1052056,200,1,1),//���������
			Array(1702625,200,1,1),//������������
			Array(1702589,200,1,1),//ӣ������
			Array(1702375,200,1,1),//��������˹
			Array(1702457,200,1,1),//�������ѩ��
			Array(1042104,200,1,1),//С��ҶT��
			Array(1042105,200,1,1),//С��ҶT��
			Array(1012131,200,1,1),//�ð׵�����
			Array(1042142,200,1,1),//�ʺ�������
			Array(1062093,200,1,1),//�������ж̿�
			Array(1702611,200,1,1),//СѼ�����
			Array(1004636,200,1,1),//�㽶����ñ
			Array(1042349,200,1,1),//��ɫҡ����ñ��
			Array(1012049,200,1,1),//�������
			Array(1002555,200,1,1),//�������
			Array(1003710,200,1,1),//��ҽ�ڽܿ�ñ
			Array(1702660,200,1,1),//��Ƥѩ������
			Array(1702640,200,1,1),//�ö�ѩ����
			Array(1082592,200,1,1),//�������
			Array(1000003,200,1,1),//�����
			Array(1102066,200,1,1),//аħ����
			Array(1052948,200,1,1),//�¶�����˯��
			Array(1004540,200,1,1),//�¶�����˯ñ
			Array(1052951,200,1,1),//��������ȹ
			Array(1102778,200,1,1),//����������
			Array(1102142,200,1,1),//��������
			Array(1102749,200,1,1),//�����������
			Array(1102754,200,1,1),//Ⱥ��֮��
			Array(1102755,200,1,1),//�ǹ�������
			Array(1102756,200,1,1),//΢Ц���׶���
			Array(1102757,200,1,1),//��������������
			Array(1102808,200,1,1),//��������
			Array(1102692,200,1,1),//СС��˾��
			Array(1102688,200,1,1),//˫ɫ������
			Array(1102682,200,1,1),//δ����ʹע����
			Array(1102684,200,1,1),//δ��ҽ��������
			Array(1102676,200,1,1),//ҡ��è�佴
			Array(1102220,200,1,1),//С��������
			Array(1102665,200,1,1),//����Χ��
			Array(1102605,200,1,1),//����������
			Array(1072484,200,1,1),//��è��Ь
			Array(1072258,200,1,1),//��è��Ь
			Array(1072337,200,1,1),//ϲ������
			Array(1082312,200,1,1),//�ʺ绤��
			Array(1082493,200,1,1),//�����װ�����
			Array(1082581,200,1,1),//�ɿ�������װ��
			Array(1082549,200,1,1),//���������
			Array(1082503,200,1,1),//ʥ����ʹ����
			Array(1082548,200,1,1),//��������
			
			Array(1112150,200,1,1),//��ʹ������Ƭ��ָ
			Array(1112176,200,1,1),//����������Ƭ��ָ
			Array(1112184,200,1,1),//����̩�����Ƭ��ָ
			Array(1112191,200,1,1),//�۷���Ƭ��ָ
			Array(1112192,200,1,1),//����������Ƭ��ָ
			Array(1112197,200,1,1),//����С������Ƭ��ָ
			Array(1112808,200,1,1),//��ʯ�����ָ
			Array(1112210,200,1,1),//�ƽ������ָ
			Array(1112218,200,1,1),//С��è�����ָ
			Array(1112103,200,1,1),//�ۻ���Ƭ��ָ
			
			Array(1004530,200,1,1),//��ɫ��è��żñ��
			Array(1004532,200,1,1),//Ů�ʹ�ע
			Array(1004533,200,1,1),//��������Ϸ��
			Array(1004505,200,1,1),//�ۺ�ӣ��˿��
			Array(1004488,200,1,1),//����֮˿��
			Array(1004486,200,1,1),//��֮����
			Array(1004467,200,1,1),//�ش��Ŀ���ñ
			Array(1004468,200,1,1),//ССѵ��ʦñ
			Array(1004454,200,1,1),//��èñ��
			Array(1004414,200,1,1),//�����ڰ���ñ
			Array(1004328,200,1,1),//��ɫ����ñ
			Array(1004156,200,1,1),//�������ǵ���
			Array(1004108,200,1,1),//��ҹ������ñ
	
			//Array(4000487,30,1,1),//��Ӱ��
			Array(5150038,50,1,1),//��������5000016
			Array(5150040,100,1,1),//�ʼ�1032026
			//Array(5000016,30,1,1),//�Ʊ�
			//Array(4031559,100,1,1),//��˹��Ʊ
			//Array(4031560,100,1,1),//��³����Ʊ
			//Array(4031558,100,1,1),//����������Ʊ
			//Array(4031561,100,1,1),//��������Ʊ
			//Array(4251200,10,1,1),//�µ����ˮ��
			//Array(4251201,10,1,1),//�е����ˮ��
			//Array(4251202,10,1,1),//�ߵ����ˮ��4004000
			//Array(4004000,1000,1,1),//��
			//Array(4004001,1000,1,1),//��
			//Array(4004002,1000,1,1),//��
			//Array(4004003,1000,1,1),//��
			//Array(4004004,700,1,1),//��4031179
			Array(4031179,500,1,1),//DƬ
			Array(4001017,500,1,1),//����
			Array(2340000,200,1,1),//ף������
			Array(2049000,450,1,1),//���¾���
			Array(2049001,350,1,1),//���¾���
			Array(2049002,250,1,1),//���¾���
			Array(2049100,500,1,1),//�������
			Array(2040914,30,1,1),//���ƹ�������  
			Array(2040915,30,1,1),//ͷ����������
			Array(2040025,30,1,1),//ͷ����������  
			Array(2040026,100,1,1),//������������  
			Array(2041302,10,1,1),
			Array(2041301,100,1,1),//�������ݾ���
			Array(2041307,10,1,1),  
			Array(2041308,10,1,1),
			Array(2041304,100,1,1),//������������  
			Array(2041305,10,1,1),
			Array(2041310,100,1,1),//������������  
			Array(2041311,10,1,1),			
			Array(1002513,100,1,1),//�������ñ
			Array(1002930,100,1,1),//�������ñ
			Array(1003104,100,1,1),//�������ñ
			Array(1032026,10,1,1),//��ˮ��
			Array(1032028,200,1,1),//��ˮ��
			Array(1002419,1000,1,1),//��Ҷñ
			Array(1002510,1000,1,1),//��Ҷͷ��30��
			Array(1002511,500,1,1),//��Ҷͷ��70��
			Array(1002758,200,1,1),//��Ҷͷ��90��		
			
			Array(1002677,150,1,1),//��߽���ñ
			//Array(1002798,1000,1,1),//���1002798
			Array(1002743,150,1,1),//����֮ñ
			Array(1002939,50,1,1),//��ȫñ
			//Array(1002391,1000,1,1),//����ͷ��(��) 
			//Array(1002392,1000,1,1),//����ͷ��(��) 
			//Array(1002393,1000,1,1),//����ͷ��(��) 
			//Array(1002394,1000,1,1),//����ͷ��(��) 
			//Array(1002395,1000,1,1),//����ͷ��(��)
			//Array(1002585,1000,1,1),//��ɫ������ñ��
			//Array(1002586,1000,1,1),//��ɫ������ñ��
			//Array(1002587,1000,1,1),//��ɫ������ñ��
			//Array(1082002,1000,1,1),//��������
			//Array(1082145,500,1,1),//��������(��) 
			//Array(1082146,500,1,1),//��������(��) 
			//Array(1082147,500,1,1),//��������(��) 
			//Array(1082148,500,1,1),//��������(��) 
			//Array(1082149,500,1,1),//��������(��) 
			//Array(1082150,300,1,1),//��������(��)1472063 
//-------����-------
			Array(1322054,200,1,1), //��Ҷ����
			Array(1412027,200,1,1), //��ҶǬ����
			Array(1422029,200,1,1), //��Ҷ������
			Array(1442051,200,1,1), //��Ҷս��
			Array(1432040,150,1,1),//��Ҷ����ǹ
			Array(1302064,150,1,1),//��Ҷͻ����
			Array(1402039,150,1,1),//��Ҷ���׽�
			Array(1382039,150,1,1),//��Ҷ������
			Array(1452045,150,1,1),//��Ҷhappy��
			Array(1462040,200,1,1),//��Ҷ������
			Array(1472055,150,1,1),//��Ҷ����ȭ
			Array(1332056,150,1,1),//��Ҷ׷���
			Array(1472063,300,1,1),//ħ������
			Array(1102040,300,1,1),//��������(��) 
			Array(1102043,300,1,1),//��������(��)  
			Array(1102042,100,1,1),//��������(��) 
			Array(1102041,100,1,1),//��������(��)
			Array(1102085,1000,1,1),//��ɫ��������
			Array(1102086,100,1,1),//��ɫ��������
			Array(1102084,80,1,1),//�ۺ��������
			Array(1102163,20,1,1),//��������
			//Array(1102079,1000,1,1),//�ƾɵĺ�ɫ����
			//Array(1102081,1000,1,1),//�ƾɵĻ�ɫ����
			//Array(1102082,500,1,1),//�ƾɵĺ�ɫ����
			//Array(1102211,1000,1,1),//ս�������
			//Array(1072262,500,1,1),//��ɫ����˹ƤЬ
			//Array(1072264,500,1,1),//��ɫ����˹ƤЬ
			//Array(1072369,300,1,1),//1072369��ˮ��Ь��
			Array(1012070,20,1,1),//ѩ��+��
			Array(1012071,100,1,1),//ѩ��ȫ����
			Array(1012072,500,1,1),//����
			Array(1012073,1000,1,1),//����
			Array(1022060,100,1,1),//����
			Array(1022067,100,1,1),//�ں���
			Array(1012056,100,1,1),//��������1012056
			Array(1012161,20,1,1),//����ı���
			Array(1022066,500,1,1),//�������۾�
			Array(1050100,50,1,1),//ԡ��1050100
			Array(1050127,50,1,1),//ԡ��1050100
			Array(1051098,50,1,1),//ԡ��1050100
			Array(1051140,50,1,1),//ԡ��1050100
			Array(1402063,30,1,1),//ӣ��ɡ
			Array(1302058,1000,1,1),//��Ҷɡ
			Array(1302026,1000,1,1),//ɡ1302026
			Array(1302027,1000,1,1),//ɡ1302026
			Array(1302028,1000,1,1),//ɡ1302026
			Array(1302029,1000,1,1),//ɡ1302026
			Array(1302071,1000,1,1),//��ɫ��ӾȦ
			Array(1322021,1000,1,1),//��ӾȦ
			Array(1322022,500,1,1),//��ӾȦ
			Array(1322023,1000,1,1),//��ӾȦ
			Array(1322024,300,1,1),//��ӾȦ
			Array(1322025,250,1,1),//��ӾȦ
			Array(1322026,200,1,1),//��ӾȦ
			Array(1442054,1000,1,1),//����
			Array(1442055,300,1,1),//����
			Array(1442056,300,1,1),//����
			Array(1442057,300,1,1),//����
			
			Array(1432016,300,1,1),//����1432016
			Array(1432017,300,1,1),//����1432016
			Array(1432018,300,1,1),//����1432016
			Array(1442012,300,1,1),//ѩ��0
			Array(1442013,500,1,1),//ѩ��12
			Array(1442014,500,1,1),//ѩ��24
			Array(1442015,700,1,1),//ѩ��36
			Array(1442016,300,1,1),//ѩ��48
			Array(1442017,300,1,1),//ѩ��60
			Array(1442046,300,1,1),//��������
			Array(1442021,700,1,1),//���ϰ�
			Array(1442022,500,1,1),//���ϰ�
			Array(1442023,700,1,1),//���ϰ�
			//Array(2370008,2000,1,1),//������2370008
			//Array(2370009,2000,1,1),//������2370008
			//Array(2370010,2000,1,1),//������2370008
			//Array(2370011,2000,1,1),//������2370008
			//Array(2370012,2000,1,1),//������2370008
			Array(2370000,50,1,1),//������10W
			Array(2370001,80,1,1),//������5W
			Array(2370002,100,1,1),//������3W
			Array(2370003,200,1,1),//������2W
			Array(2370004,300,1,1),//������
			//Array(2370005,2000,1,1),//������
			//Array(2370006,2000,1,1),//������
			//Array(2370007,2000,1,1),//������
			//Array(1302037,100,1,1),//С��
			Array(5390006,300,1,1),//��������5390006
			Array(5390000,300,1,1),//����5390006
			Array(5390001,300,1,1),//����5390006
			Array(5390002,300,1,1),//����5390006
			Array(5390003,300,1,1),//����5390006
			Array(5390004,300,1,1),//����5390006
			Array(5390005,300,1,1),//����5390006
			Array(1092022,30,1,1),//��ɫ�����
			Array(1072238,100,1,1),//��ɫ��Ь
			Array(1072239,100,1,1),//��ɫ��Ь
			Array(1002663,500,1,1),//����ñ��
			Array(1302063,50,1,1),//ȼ�յĻ��浶
			Array(1302106,50,1,1),//ȼ�յı��浶
			Array(1302080,100,1,1),//ð�յ�С����
			Array(1302085,100,1,1),//����
			Array(1302087,1000,1,1),//���
			Array(1382015,50,1,1),//��Ģ��
			Array(1382016,50,1,1),//�㹽
			Array(1402044,300,1,1),//�Ϲϵ���
			Array(1302061,100,1,1),//���ٱ���
			Array(1422030,300,1,1),//�ۺ캣������
			Array(1422031,300,1,1),//��ɫ��������
			Array(1432046,300,1,1),//ʥ��������
			Array(1432013,100,1,1),//�Ϲ�ǹ
        	Array(1302024,500,1,1),//�ϱ�ֽ����
        	Array(1322051,300,1,1),//��Ϧ
        	Array(1402014,30,1,1),//�¶ȼ�
        	Array(1402029,100,1,1),//����������
        	Array(1422011,300,1,1),//��ƿ
        	Array(1332053,500,1,1),//Ұ���տ�
        	Array(1372017,100,1,1),//��·��
			Array(5570000,100,1,1),//����
        	Array(1422036,100,1,1),//��ߴ���
			Array(1302021,1000,1,1),//��ߴ���1302021
        	Array(1322027,300,1,1),//ƽ�׹�
        	Array(1442039,300,1,1),//������
        	Array(1302019,200,1,1),//������
        	Array(1332021,300,1,1),//������
        	Array(1302128,1000,1,1),//���	
        	Array(1302084,1000,1,1),//���
        	Array(1402013,100,1,1),//���ս�
			Array(1302036,300,1,1),//��ҶС��
			Array(1302049,100,1,1),//���߱�
			Array(1302001,1000,1,1),//����
			Array(1312012,500,1,1),//����Ȧ
			Array(1322006,1000,1,1),//�ֹ�
			Array(1422011,300,1,1),//���
			Array(1432039,100,1,1),//�����
			//Array(2000005,100,1,1),//����ҩˮ
			//Array(2000004,500,1,1),//����ҩˮ
			//Array(2210005,500,1,1),//��Ħ
			//Array(2210010,500,1,1),//Ů��		
        	Array(3010112,500,1,1),
			Array(1702246,150,1,1),//�Ļ�����	
        	Array(1702248,150,1,1),//ʥ��¹����	
        	Array(1702278,150,1,1),//��֮����	
        	Array(1702305,150,1,1),//���ܲ�����
        	Array(1702335,150,1,1),//����ʦ������	
        	Array(1702392,150,1,1),//�ڰ�С��ħ����	
        	Array(1702393,150,1,1),//��������	
        	Array(1702372,150,1,1),//ʥ������
        	Array(1702408,150,1,1),//������ר������	
        	Array(1702401,150,1,1),//���Ӻ��ܲ�����
        	Array(1702459,150,1,1),//�޻�������
        	Array(1702460,150,1,1),//��������	
        	Array(1702499,300,1,1),//��֮������	
        	Array(1702550,150,1,1),//��̫������	
        	Array(1702538,150,1,1),//¶������	
        	Array(1702508,150,1,1),//��ݮţ������
        	Array(1702588,150,1,1),//��è�������	
        	Array(1702598,150,1,1),//��Ҷ����	
        	Array(1702597,150,1,1),//�ʺ籴������	
        	Array(1702579,150,1,1),//ˮ����������	
        	Array(1702576,150,1,1),//ž�ž઴������	
        	Array(1702660,150,1,1),//��Ƥѩ������	
        	Array(1702669,150,1,1),//�����ռ�����	
        	Array(1702617,150,1,1),//������������	
        	Array(1702637,150,1,1),//�����ɶ�������
        	Array(1702625,150,1,1),//������������
        	//Array(1472063,100,1,1),//ħ������
        	Array(1062073,300,1,1),//�ر��ϹϿ�(��)��
        	Array(1062074,300,1,1),//�ر��ϹϿ�(�ں�)��
//-----����-----
			Array(3010125,80, 1, 1), //�ᱴ��ս������
			Array(3010124,80, 1, 1), //����˹��������
			Array(3010120,100, 1, 1), //�ʵ�����
			Array(3010093,100, 1, 1), //�����Ļ�
			Array(3010075,50, 1, 1), //��Ϊ���ֿ�
			Array(3010212,100, 1, 1), //��������
			Array(3010462,200,1,1), //����̨
			Array(3010412,200,1,1), //˫��
			Array(3010149,200,1,1), //����
			Array(3015428,200, 1, 1), //�ͺ���һ����̻�����
			Array(3010795,200, 1, 1), //ɭ������Ϣ��
			Array(3010206,300, 1, 1), //���뻭������
			Array(3015225,100, 1, 1), //�ʹ���һ����������
			Array(3010976,80, 1, 1), //Ϊ�Ҽ��ͣ�����
			Array(3010999,80, 1, 1), //�������ò�����
			Array(3010804,200, 1, 1), //���������������
			Array(3010899,200, 1, 1), //��������
			Array(3015120,100,1,1), //��ͷ��ս
		    Array(3010043,100,1,1),//ħŮ�ķ�ɨ��
		    Array(3015051,10,1,1),//���ްԹ��ʾ���
		    Array(3015183,10,1,1),//��ˮ�鱳������
		    Array(3015096,10,1,1),//���������������
		    Array(3010180,1000,1,1),//HP����
		    Array(3010009,10,1,1),//��ɫ������Ͱ
		    Array(3010028,100,1,1),//�Ϻ�������
		    Array(3012006,50,1,1),//�紵����
        	Array(3010013,10,1,1),//�Ƴ�����
			Array(3010034,10,1,1),//�Ƴ�����
			Array(3010035,10,1,1),//�Ƴ�����
        	Array(3010014,500,1,1),//������
        	Array(3010018,1000,1,1),//Ҭ����ɳ̲��
        	Array(3010025,1000,1,1),//��Ҷ�����
        	Array(3012001,1000,1,1),//����
        	Array(3012002,100,1,1),//ԡͰ---
        	Array(3010073,50,1,1),//PB����
        	Array(3010049,50,1,1),//ѩ����
        	Array(3010068,50,1,1),//¶ˮ����
        	Array(3010070,10,1,1),//���ް�Ʒ����
        	Array(3010095,100,1,1),//ʯͷ������
//-----����ֲ������-----
        	Array(3010898,100,1,1),//������������
        	Array(3010465,100,1,1),//�ɰ���������
        	Array(3010460,100,1,1),//��������
        	Array(3010450,100,1,1),//����������
        	Array(3010455,100,1,1),//�����ĵ�������
        	Array(3010456,100,1,1),//�ž黨����
        	Array(3010458,100,1,1),//������������
        	Array(3010863,50,1,1),//��ŭ������ʦ����
        	Array(3010447,100,1,1),//˯��С������
        	Array(3010446,100,1,1),//Ƥ���ʺ�����
        	Array(3010448,100,1,1),//����ԡ����
        	Array(3010434,100,1,1),//�ȴ���������
        	Array(3010428,100,1,1),//ˮ������
        	Array(3010409,100,1,1),//��������
      	    Array(3010094,100,1,1),//ƯƯ������-----------------------
        	Array(3010411,100,1,1),//��βʨ����
        	Array(3010085,50,1,1),//����������
        	Array(3010077,100,1,1),//èͷӥ����
        	Array(3010053,50,1,1),//���Ӽ��������
        	Array(3010151,200,1,1),//���˵�����
        	Array(3015415,50,1,1),//��������
        	Array(3010142,50,1,1),//ˮ�������
        	Array(3010144,100,1,1),//��Ϧ����
        	Array(3015430,100,1,1),//��������
        	Array(3010117,100,1,1),//ħ��������
        	Array(3015424,100,1,1),//������������
        	Array(3015428,100,1,1),//�ͺ���һ����̻�����
        	Array(3015427,100,1,1),//�ͺ���һ�����齫����
        	Array(3010804,100,1,1),//���������������
        	Array(3015045,50,1,1),//������������--------------
        	Array(3010375,50,1,1),//����ĳ���ҩˮ����
        	Array(3015057,50,1,1),//�̻���������
        	Array(3010373,50,1,1),//�ƶ�ϴ�ּ�����
        	Array(3010799,100,1,1),//��Ĺ��������
        	Array(3010737,50,1,1),//����Ӣ��������
        	Array(3010734,100,1,1),//è������
        	Array(3010738,50,1,1),//��������������
        	Array(3010740,100,1,1),//ʥ��������
        	Array(3010365,100,1,1),//�ݱ˵����ĹŴ�ʯ������
        	Array(3010306,100,1,1),//�����Ļ�����
        	Array(3010301,50,1,1),//�߼�HPҩˮ����
        	Array(3010188,100,1,1),//�ࡤ�װ�����
        	Array(3010186,100,1,1),//��������
        	Array(3010184,50,1,1),//��������
         	Array(3010173,50,1,1),//��ʥ����������
        	Array(3010175,50,1,1),//����������
        	Array(3010195,100,1,1),//�޼�֮������
        	Array(3010210,100,1,1),//��ݮ������±�����--------------
        	Array(3010224,300,1,1),//�����������
        	Array(3010036,50,1,1),//������ǧ
        	Array(3010044,50,1,1),//ͬһ��ɡ��
        	Array(3010111,100,1,1),//��������
        	Array(3010115,100,1,1),//�ܱ�����
        	Array(3010126,50,1,1),//����ħ����
        	Array(3010313,50,1,1),//�ۺ���������
        	Array(3010128,50,1,1),//��������
        	Array(3010133,100,1,1),//������
        	Array(3010152,200,1,1),//������������
        	Array(3010291,100,1,1),//���տ�����
        	Array(3010172,100,1,1),//�ǿ�����
        	Array(3010168,100,1,1),//������������
        	Array(3010185,100,1,1),//С���Ʒ����
        	Array(3010622,100,1,1),//�ҵĺ��ѵ���֮��
        	Array(3010453,100,1,1),//���ӳ˷���
        	Array(3010493,100,1,1),//�Ǿ�����--------------------------------
        	Array(3010527,100,1,1),//�����
        	Array(3010531,100,1,1),//С���ϳ���
        	Array(3010565,100,1,1),//�ҵ�Ů������
        	Array(3010587,100,1,1),//ʱ�佺��
        	Array(3010609,100,1,1),//����������
        	Array(3010608,100,1,1),//��������������
        	Array(3010661,100,1,1),//�����������
        	Array(3010678,100,1,1),//���Ӷ�֮��Ϣ
        	Array(3010739,100,1,1),//ѩ���㲨����
        	Array(3010744,100,1,1),//ð�յ���שͷ������
        	Array(3010752,100,1,1),//õ������
        	Array(3010756,100,1,1),//�����в�è����
        	Array(3010767,100,1,1),//ѩ������
        	Array(3010760,100,1,1),//�Ŵ�ԡ������
        	Array(3010795,100,1,1),//ɭ������Ϣ��
        	Array(3010806,100,1,1),//��ӣ������
        	Array(3010848,100,1,1),//���̺���˹�����
        	Array(3012024,100,1,1),//ɳ̲��������
			Array(1142073, 150, 1, 1), //-----ѫ��-----
			Array(1142075, 150, 1, 1), //
			Array(1142654, 150, 1, 1), //
			Array(1142650, 150, 1, 1), //
			Array(1142443, 150, 1, 1), //
			Array(1142360, 150, 1, 1), //
			Array(1142119, 150, 1, 1), //
			Array(1142101, 150, 1, 1), //
			Array(1142120, 150, 1, 1), //
			Array(1142081, 150, 1, 1), //
			Array(1142118, 150, 1, 1), //
			Array(1142114, 150, 1, 1), //
			Array(1142076, 150, 1, 1), //
			Array(1142116, 150, 1, 1), //
			Array(1142115, 150, 1, 1), //
			Array(1142082, 150, 1, 1), //
			Array(1142117, 150, 1, 1), //
			Array(1142113, 150, 1, 1), //
			Array(1142112, 150, 1, 1), //
			Array(1142006, 150, 1, 1), //
			Array(1142231, 150, 1, 1), //
			Array(1142233, 150, 1, 1), //
			Array(1142230, 150, 1, 1), //
			Array(1142232, 150, 1, 1) //
);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
           selStr = "#e#r���������Ի��������Ʒ��99%���\r\n\#b�Ƿ��漴����50W-100W�����һ�Σ�#n#k\r\n";
		   for (i = 0; i < itemList.length; i++) {
                selStr += "#d#v" + itemList[i][0] + "#";
            }
			
			cm.sendOk(selStr);
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
		selStr = "\r\n";
		   for (i = 0; i < itemList.length; i++) {
                selStr += "#d#v" + itemList[i][0] + "#";
            }
		if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�		
		cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��齱.");		
		cm.dispose();		
		} else if (cm.getInventory(2).isFull(0)){//�жϵڶ���Ҳ������������װ�����Ƿ���һ���ո�	
		cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷��齱.");	
		cm.dispose();		
		} else if (cm.getInventory(3).isFull(0)){//�жϵ�����Ҳ������������װ�����Ƿ���һ���ո�		
		cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷��齱.");		
		cm.dispose();		
		} else if (cm.getInventory(4).isFull(0)){//�жϵ��ĸ�Ҳ������������װ�����Ƿ���һ���ո�		
		cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷��齱.");		
		cm.dispose();		
		} else if (cm.getInventory(5).isFull(0)){//�жϵ����Ҳ�����ֽ�����װ�����Ƿ���һ���ո�		
		cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷��齱.");		
		cm.dispose();
		} else if (cm.getMeso() >= 1000000) {//�жϽ��
            cm.sendYesNo("���齱��ÿ���������50W-100W��ң��Ϳ���������������Ʒ��99%��á�\r\n\#b�Ƿ��漴����50W-100W�����һ�Σ�"+selStr);
        } else {
            cm.sendOk("���Ľ��̫���ˣ�");
            cm.safeDispose();
        }
    } else if (status == 1) {
		var ii = MapleItemInformationProvider.getInstance();
        var chance = Math.floor(Math.random()*500);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
           //var notice = finalitem[finalchance][3];
           // item = cm.gainGachaponItem(itemId, quantity,);//, notice
			var Laba = finalitem[finalchance][3];
			       
				   
				if(ii.getInventoryType(itemId).getType() == 1){
			        	var toDrop = ii.randomizeStats(ii.getEquipById(itemId)).copy();
						MapleInventoryManipulator.addFromDrop(cm.getC(),toDrop,false);
				}else{
				 	 var toDrop = new Equip(itemId,0).copy();
					cm.gainItem(itemId,quantity);
				}
				
            if (Laba == 1) {
				var random = java.lang.Math.floor(Math.random() * 500000 + 500000);
                cm.gainMeso(-random); //�۳����
				cm.itemlaba("[�����-���(" + random + ")]",toDrop)
                cm.sendOk("������ #b#t" + itemId + "##k " + quantity + "����");
            } else {//������
                cm.sendOk("������ #b#t" + itemId + "##k " + quantity + "����");
            }
            cm.safeDispose();
        } else {
            cm.sendOk("�������������ʲô��û���õ���");
            cm.gainMeso(-700000); //�۳����
            cm.safeDispose();
        }
    }
}