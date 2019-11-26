//
//  FSStatOptions.h
//  Filestack
//
//  Created by Łukasz Cichecki on 20/01/16.
//  Copyright © 2016 Filestack. All rights reserved.
//

@import Foundation;

@interface FSStatOptions : NSObject

@property (nonatomic, assign) BOOL size;
@property (nonatomic, assign) BOOL mimeType;
@property (nonatomic, assign) BOOL fileName;
@property (nonatomic, assign) BOOL width;
@property (nonatomic, assign) BOOL height;
@property (nonatomic, assign) BOOL uploaded;
@property (nonatomic, assign) BOOL writeable;
@property (nonatomic, assign) BOOL md5;
@property (nonatomic, assign) BOOL location;
@property (nonatomic, assign) BOOL path;
@property (nonatomic, assign) BOOL container;
@property (nonatomic, readonly, copy) NSDictionary *toQueryParameters;

- (instancetype)initWithDictionary:(NSDictionary *)dictionary NS_DESIGNATED_INITIALIZER;

@end
